import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bgu")
export default class BguController {
  @operation({
    summary: "Get Bgu",
  })
  @get()
  static getBgu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bgu",
  })
  @post("{id}")
  static createBgu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
