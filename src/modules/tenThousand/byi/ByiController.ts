import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("byi")
export default class ByiController {
  @operation({
    summary: "Get Byi",
  })
  @get()
  static getByi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Byi",
  })
  @post("{id}")
  static createByi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
