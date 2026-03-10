import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lih")
export default class LihController {
  @operation({
    summary: "Get Lih",
  })
  @get()
  static getLih = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lih",
  })
  @post("{id}")
  static createLih = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
