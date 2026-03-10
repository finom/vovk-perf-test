import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ezx")
export default class EzxController {
  @operation({
    summary: "Get Ezx",
  })
  @get()
  static getEzx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ezx",
  })
  @post("{id}")
  static createEzx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
