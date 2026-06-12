import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iwg")
export default class IwgController {
  @operation({
    summary: "Get Iwg",
  })
  @get()
  static getIwg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iwg",
  })
  @post("{id}")
  static createIwg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
