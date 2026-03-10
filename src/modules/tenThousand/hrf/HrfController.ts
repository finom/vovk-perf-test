import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hrf")
export default class HrfController {
  @operation({
    summary: "Get Hrf",
  })
  @get()
  static getHrf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hrf",
  })
  @post("{id}")
  static createHrf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
