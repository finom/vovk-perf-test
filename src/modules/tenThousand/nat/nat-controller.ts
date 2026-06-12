import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nat")
export default class NatController {
  @operation({
    summary: "Get Nat",
  })
  @get()
  static getNat = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nat",
  })
  @post("{id}")
  static createNat = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
