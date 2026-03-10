import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("crz")
export default class CrzController {
  @operation({
    summary: "Get Crz",
  })
  @get()
  static getCrz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Crz",
  })
  @post("{id}")
  static createCrz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
