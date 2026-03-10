import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("grf")
export default class GrfController {
  @operation({
    summary: "Get Grf",
  })
  @get()
  static getGrf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Grf",
  })
  @post("{id}")
  static createGrf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
