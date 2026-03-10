import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eu")
export default class EuController {
  @operation({
    summary: "Get Eu",
  })
  @get()
  static getEu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eu",
  })
  @post("{id}")
  static createEu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
