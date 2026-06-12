import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ivb")
export default class IvbController {
  @operation({
    summary: "Get Ivb",
  })
  @get()
  static getIvb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ivb",
  })
  @post("{id}")
  static createIvb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
