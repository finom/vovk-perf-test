import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ade")
export default class AdeController {
  @operation({
    summary: "Get Ade",
  })
  @get()
  static getAde = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ade",
  })
  @post("{id}")
  static createAde = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
