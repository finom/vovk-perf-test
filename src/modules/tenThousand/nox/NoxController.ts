import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nox")
export default class NoxController {
  @operation({
    summary: "Get Nox",
  })
  @get()
  static getNox = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nox",
  })
  @post("{id}")
  static createNox = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
