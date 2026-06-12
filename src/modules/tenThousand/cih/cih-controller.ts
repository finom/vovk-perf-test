import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cih")
export default class CihController {
  @operation({
    summary: "Get Cih",
  })
  @get()
  static getCih = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cih",
  })
  @post("{id}")
  static createCih = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
