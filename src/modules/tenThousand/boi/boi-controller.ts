import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("boi")
export default class BoiController {
  @operation({
    summary: "Get Boi",
  })
  @get()
  static getBoi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Boi",
  })
  @post("{id}")
  static createBoi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
