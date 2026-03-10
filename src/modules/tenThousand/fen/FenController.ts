import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fen")
export default class FenController {
  @operation({
    summary: "Get Fen",
  })
  @get()
  static getFen = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fen",
  })
  @post("{id}")
  static createFen = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
