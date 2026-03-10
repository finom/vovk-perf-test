import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nqy")
export default class NqyController {
  @operation({
    summary: "Get Nqy",
  })
  @get()
  static getNqy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nqy",
  })
  @post("{id}")
  static createNqy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
