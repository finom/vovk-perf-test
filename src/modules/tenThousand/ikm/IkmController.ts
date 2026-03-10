import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ikm")
export default class IkmController {
  @operation({
    summary: "Get Ikm",
  })
  @get()
  static getIkm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ikm",
  })
  @post("{id}")
  static createIkm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
