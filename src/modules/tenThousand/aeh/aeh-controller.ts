import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aeh")
export default class AehController {
  @operation({
    summary: "Get Aeh",
  })
  @get()
  static getAeh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aeh",
  })
  @post("{id}")
  static createAeh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
