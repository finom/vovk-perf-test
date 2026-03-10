import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ee")
export default class EeController {
  @operation({
    summary: "Get Ee",
  })
  @get()
  static getEe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ee",
  })
  @post("{id}")
  static createEe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
