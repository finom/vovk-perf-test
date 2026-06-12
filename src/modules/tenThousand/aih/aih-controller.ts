import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aih")
export default class AihController {
  @operation({
    summary: "Get Aih",
  })
  @get()
  static getAih = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aih",
  })
  @post("{id}")
  static createAih = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
