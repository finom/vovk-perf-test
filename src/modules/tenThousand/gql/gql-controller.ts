import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gql")
export default class GqlController {
  @operation({
    summary: "Get Gql",
  })
  @get()
  static getGql = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gql",
  })
  @post("{id}")
  static createGql = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
