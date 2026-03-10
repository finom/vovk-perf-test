import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eym")
export default class EymController {
  @operation({
    summary: "Get Eym",
  })
  @get()
  static getEym = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eym",
  })
  @post("{id}")
  static createEym = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
