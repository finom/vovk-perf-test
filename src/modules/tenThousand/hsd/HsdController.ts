import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hsd")
export default class HsdController {
  @operation({
    summary: "Get Hsd",
  })
  @get()
  static getHsd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hsd",
  })
  @post("{id}")
  static createHsd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
