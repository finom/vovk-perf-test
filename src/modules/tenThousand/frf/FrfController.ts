import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("frf")
export default class FrfController {
  @operation({
    summary: "Get Frf",
  })
  @get()
  static getFrf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Frf",
  })
  @post("{id}")
  static createFrf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
