import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ju")
export default class JuController {
  @operation({
    summary: "Get Ju",
  })
  @get()
  static getJu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ju",
  })
  @post("{id}")
  static createJu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
