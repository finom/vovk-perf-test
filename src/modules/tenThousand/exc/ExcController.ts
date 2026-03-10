import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("exc")
export default class ExcController {
  @operation({
    summary: "Get Exc",
  })
  @get()
  static getExc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Exc",
  })
  @post("{id}")
  static createExc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
