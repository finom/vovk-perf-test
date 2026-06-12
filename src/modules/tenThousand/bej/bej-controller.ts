import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bej")
export default class BejController {
  @operation({
    summary: "Get Bej",
  })
  @get()
  static getBej = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bej",
  })
  @post("{id}")
  static createBej = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
