import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fif")
export default class FifController {
  @operation({
    summary: "Get Fif",
  })
  @get()
  static getFif = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fif",
  })
  @post("{id}")
  static createFif = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
