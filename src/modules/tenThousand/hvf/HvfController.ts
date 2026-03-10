import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hvf")
export default class HvfController {
  @operation({
    summary: "Get Hvf",
  })
  @get()
  static getHvf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hvf",
  })
  @post("{id}")
  static createHvf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
