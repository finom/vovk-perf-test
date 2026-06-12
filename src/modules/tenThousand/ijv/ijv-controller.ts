import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ijv")
export default class IjvController {
  @operation({
    summary: "Get Ijv",
  })
  @get()
  static getIjv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ijv",
  })
  @post("{id}")
  static createIjv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
