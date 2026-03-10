import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("euq")
export default class EuqController {
  @operation({
    summary: "Get Euq",
  })
  @get()
  static getEuq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Euq",
  })
  @post("{id}")
  static createEuq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
