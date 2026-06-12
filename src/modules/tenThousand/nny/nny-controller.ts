import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nny")
export default class NnyController {
  @operation({
    summary: "Get Nny",
  })
  @get()
  static getNny = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nny",
  })
  @post("{id}")
  static createNny = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
