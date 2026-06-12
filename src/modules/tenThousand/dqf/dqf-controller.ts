import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dqf")
export default class DqfController {
  @operation({
    summary: "Get Dqf",
  })
  @get()
  static getDqf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dqf",
  })
  @post("{id}")
  static createDqf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
