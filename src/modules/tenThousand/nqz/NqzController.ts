import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nqz")
export default class NqzController {
  @operation({
    summary: "Get Nqz",
  })
  @get()
  static getNqz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nqz",
  })
  @post("{id}")
  static createNqz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
