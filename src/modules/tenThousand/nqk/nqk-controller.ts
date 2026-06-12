import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nqk")
export default class NqkController {
  @operation({
    summary: "Get Nqk",
  })
  @get()
  static getNqk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nqk",
  })
  @post("{id}")
  static createNqk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
