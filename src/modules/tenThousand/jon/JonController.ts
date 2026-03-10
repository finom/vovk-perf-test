import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jon")
export default class JonController {
  @operation({
    summary: "Get Jon",
  })
  @get()
  static getJon = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jon",
  })
  @post("{id}")
  static createJon = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
