import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gqp")
export default class GqpController {
  @operation({
    summary: "Get Gqp",
  })
  @get()
  static getGqp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gqp",
  })
  @post("{id}")
  static createGqp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
