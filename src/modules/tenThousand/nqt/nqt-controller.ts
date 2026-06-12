import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nqt")
export default class NqtController {
  @operation({
    summary: "Get Nqt",
  })
  @get()
  static getNqt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nqt",
  })
  @post("{id}")
  static createNqt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
