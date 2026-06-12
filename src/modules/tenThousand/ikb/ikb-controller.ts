import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ikb")
export default class IkbController {
  @operation({
    summary: "Get Ikb",
  })
  @get()
  static getIkb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ikb",
  })
  @post("{id}")
  static createIkb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
