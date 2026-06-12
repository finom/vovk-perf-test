import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hgy")
export default class HgyController {
  @operation({
    summary: "Get Hgy",
  })
  @get()
  static getHgy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hgy",
  })
  @post("{id}")
  static createHgy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
