import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ism")
export default class IsmController {
  @operation({
    summary: "Get Ism",
  })
  @get()
  static getIsm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ism",
  })
  @post("{id}")
  static createIsm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
