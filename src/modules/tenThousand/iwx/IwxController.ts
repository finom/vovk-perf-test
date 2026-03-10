import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iwx")
export default class IwxController {
  @operation({
    summary: "Get Iwx",
  })
  @get()
  static getIwx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iwx",
  })
  @post("{id}")
  static createIwx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
