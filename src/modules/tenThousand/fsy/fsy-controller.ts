import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fsy")
export default class FsyController {
  @operation({
    summary: "Get Fsy",
  })
  @get()
  static getFsy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fsy",
  })
  @post("{id}")
  static createFsy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
