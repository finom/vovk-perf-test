import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ior")
export default class IorController {
  @operation({
    summary: "Get Ior",
  })
  @get()
  static getIor = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ior",
  })
  @post("{id}")
  static createIor = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
