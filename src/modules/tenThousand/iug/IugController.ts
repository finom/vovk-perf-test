import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iug")
export default class IugController {
  @operation({
    summary: "Get Iug",
  })
  @get()
  static getIug = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iug",
  })
  @post("{id}")
  static createIug = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
