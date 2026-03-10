import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("csk")
export default class CskController {
  @operation({
    summary: "Get Csk",
  })
  @get()
  static getCsk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Csk",
  })
  @post("{id}")
  static createCsk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
