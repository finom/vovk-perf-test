import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eiw")
export default class EiwController {
  @operation({
    summary: "Get Eiw",
  })
  @get()
  static getEiw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eiw",
  })
  @post("{id}")
  static createEiw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
