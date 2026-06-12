import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nqf")
export default class NqfController {
  @operation({
    summary: "Get Nqf",
  })
  @get()
  static getNqf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nqf",
  })
  @post("{id}")
  static createNqf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
