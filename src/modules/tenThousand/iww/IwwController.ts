import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iww")
export default class IwwController {
  @operation({
    summary: "Get Iww",
  })
  @get()
  static getIww = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iww",
  })
  @post("{id}")
  static createIww = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
