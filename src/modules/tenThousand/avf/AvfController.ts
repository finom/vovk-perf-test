import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("avf")
export default class AvfController {
  @operation({
    summary: "Get Avf",
  })
  @get()
  static getAvf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Avf",
  })
  @post("{id}")
  static createAvf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
