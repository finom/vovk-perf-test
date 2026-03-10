import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fnd")
export default class FndController {
  @operation({
    summary: "Get Fnd",
  })
  @get()
  static getFnd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fnd",
  })
  @post("{id}")
  static createFnd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
