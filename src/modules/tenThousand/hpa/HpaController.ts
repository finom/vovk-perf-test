import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hpa")
export default class HpaController {
  @operation({
    summary: "Get Hpa",
  })
  @get()
  static getHpa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hpa",
  })
  @post("{id}")
  static createHpa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
