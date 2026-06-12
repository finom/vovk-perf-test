import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iwp")
export default class IwpController {
  @operation({
    summary: "Get Iwp",
  })
  @get()
  static getIwp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iwp",
  })
  @post("{id}")
  static createIwp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
