import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("exf")
export default class ExfController {
  @operation({
    summary: "Get Exf",
  })
  @get()
  static getExf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Exf",
  })
  @post("{id}")
  static createExf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
